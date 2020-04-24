class ApplicationController < ActionController::API
    
    before_action :authorized

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end

    def logged_in?
        !!current_user
    end

    def current_user
		begin
			user_id = JWT.decode(self.request.headers['Authorization'], 'secret')[0]['user_id']
			@user = User.find(user_id)
			rescue
        end
		@user
    end
 
    def encode_token(payload)
        JWT.encode(payload, 'secret')
    end
end