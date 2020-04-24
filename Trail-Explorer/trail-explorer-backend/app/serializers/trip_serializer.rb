class TripSerializer < ActiveModel::Serializer
  belongs_to :user

  attributes :id, :title, :location, :description, :stars, :image, :trail_names

  def trail_names
    self.object.trail_names
  end
end
