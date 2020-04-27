class UserSerializer < ActiveModel::Serializer
  has_many :trips
 

  attributes :id, :email, :name, :followed_users, :profile_picture

  def followed_users
    self.object.followed_users.map{|f| FollowedUserSerializer.new(f) }
  end

end
