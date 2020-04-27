class User < ApplicationRecord
    #SECURITY
    has_secure_password

    # VALIDATIONS
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :name, presence: true
    validates :password, presence: true

    #RELATIONSHIPS
    has_many :trips
    has_many :trails, through: :trips


    has_many :follows
    has_many :followed_users, through: :follows
  
    has_many :followers, foreign_key: :followed_user_id, class_name: 'Follow'
    has_many :follower_users, through: :followers, source: :user
end
