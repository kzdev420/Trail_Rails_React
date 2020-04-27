class TrailSerializer < ActiveModel::Serializer
  attributes :id, :api_index, :name, :summary, :difficulty, :stars, :url, :imgSmallMed, :imgMedium, :location, :length, :longitude, :latitude
end
