class FollowSerializer < ActiveModel::Serializer
  attributes :id, :user, :followed_user
end
