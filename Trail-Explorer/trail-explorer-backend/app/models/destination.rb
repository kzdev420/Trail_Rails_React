class Destination < ApplicationRecord
    #RELATIONSHIPS
    belongs_to :trek, polymorphic: true
end
