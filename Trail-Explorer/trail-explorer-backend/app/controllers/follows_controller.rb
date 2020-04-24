class FollowsController < ApplicationController

    skip_before_action :authorized, except: [:create]
    
    def create 
        @follow = Follow.create(follow_params)
        render json: { user: UserSerializer.new(@user) }, status: :ok
    end
    
    def index
        @follows = Follow.all 
        render json: @follows
    end

    def show
        begin @follow = Follow.find(params[:id])
            render json: @follow
        rescue
            render json: {status: "error", code: 404, message: "Follow doesn't exist!"}
        end
    end

    def destroy
        @follow = Follow.destroy(params[:id])
    end

    private
    def follow_params
        params.require(:follow).permit(:user_id, :followed_user_id)
    end
end
