class TripsController < ApplicationController
    
    def create 
        @trip = Trip.new(trip_params)
        @trip.user = @user
        @trip.save

        params[:trip][:trail_names].each { |trail_name|
            Destination.create(trek: @trip, trail_name: trail_name )
        }
            

        render json: { trip: TripSerializer.new(@trip) }, status: :ok
    end

    def index
        @trips = Trip.all 
        render json: @trips
    end

    def show
        begin @trip = Trip.find(params[:id])
            render json: @trip
        rescue
            render json: {status: "error", code: 404, message: "Trip doesn't exist!"}
        end
    end

    private
    def trip_params
        params.require(:trip).permit(:title, :location, :description, :stars, :image)
    end

end
