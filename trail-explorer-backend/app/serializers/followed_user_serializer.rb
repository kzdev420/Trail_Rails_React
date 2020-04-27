class FollowedUserSerializer < ActiveModel::Serializer
    has_many :trips
  
  
    attributes :id, :email, :name
end
