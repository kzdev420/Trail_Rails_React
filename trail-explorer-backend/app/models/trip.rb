class Trip < ApplicationRecord
    # VALIDATIONS
    validates :user, presence: true

    #RELATIONSHIPS
    belongs_to :user
    has_many :destinations, as: :trek
    
    def trail_names
        self.destinations.map(&:trail_name)
    end
end
