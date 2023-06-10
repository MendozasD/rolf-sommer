class PagesController < ApplicationController
  def home
  end
  def work
    @gig = Performer.all
  end
  def steckbrief
  end
  def kontakt
  end
end
