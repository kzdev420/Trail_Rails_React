class Trail < ApplicationRecord
    #RELATIONSHIPS    
    has_many :destinations
    has_many :trips, through: :destinations
 
end
