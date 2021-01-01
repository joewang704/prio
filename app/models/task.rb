class Task < ApplicationRecord
  include AASM

  belongs_to :user
  belongs_to :category

  aasm :column => 'state' do
    state :pending, initial: true
    state :active
    state :completed

    event :activate do
      transitions from: :pending, to: :active
    end
    event :deactivate do
      transitions from: :active, to: :pending
    end
    event :complete do
      transitions from: :active, to: :completed
    end
  end

  default_scope { order("created_at DESC") }

end
