# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  serialize :liked_cats, Array

  has_many :problems

  def self.random_cat(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where('id NOT in (?)', ids).order('RANDOM()')
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Cat.where('id In (?)', ids)
  end
end
