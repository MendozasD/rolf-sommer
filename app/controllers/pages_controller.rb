class PagesController < ApplicationController
  def home
  end
  def work
    @gig = Job.all
  end
  def steckbrief
  end
  def kontakt
  end
  def show
    @gig = Job.find(params[:id])
  end
end
