class DestinationsController < ApplicationController
    
    def create 
        @destination = Destination.create(destination_params)
        render json: @destination
    end
    
    def index
        @destinations = Destination.all 
        render json: @destinations
    end

    def show
        begin @destination = Destination.find(params[:id])
            render json: @destination
        rescue
            render json: {status: "error", code: 404, message: "destination doesn't exist!"}
        end
    end

    private
    def destination_params
        require(:destination).permit(:trail, :trek)
    end
end
