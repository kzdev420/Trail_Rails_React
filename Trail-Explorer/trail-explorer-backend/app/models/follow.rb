class Follow < ApplicationRecord
    # VALIDATIONS
    validates :user, presence: true
    validates :followed_user, presence: true

    #RELATIONSHIPS
    belongs_to :user
    belongs_to :followed_user, class_name: 'User'    
end
