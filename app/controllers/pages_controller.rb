class PagesController < ApplicationController
  def home
    @banner = Banner.all
    @visible = VisibleBanner.find(1)
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
