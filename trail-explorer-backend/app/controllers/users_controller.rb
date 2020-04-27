class UsersController < ApplicationController

    skip_before_action :authorized, only: [:show, :create, :index]

    def show 
        @user = User.find(params[:id])
        render json: @user
    end
 
    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: {user: UserSerializer.new(@user), jwt: @token}, status: :created
        else
            render json: {error: 'Failed to Create User'}, status: :not_acceptable
        end
    end

    def index
        @users = User.all 
        render json: @users
    end

    def update
        if @user.update(user_params)
            render json: { user: UserSerializer.new(@user) }, status: :accepted
        else  
            render json: { message: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

  
    def profile
        render json: {user: UserSerializer.new(@user)}, status: :accepted
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password)
    end
end
