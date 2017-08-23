class Project < ApplicationRecord
  has_and_belongs_to_many :skills
  mount_uploader :picture, PictureUploader
end
