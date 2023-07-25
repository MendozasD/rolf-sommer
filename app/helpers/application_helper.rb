module ApplicationHelper
  # THIS HELPER TAKE SVG FILES FROM ASSETS FOLDER AND RENDERS THEM
  # <%= embedded_svg('icon-grid') %>
  # <%= embedded_svg('icon-grid', class: 'my-class') %>
  def embedded_svg(filename, options = {})
    assets = Rails.application.assets
    asset = assets.find_asset(filename)

    if asset
      file = asset.source.force_encoding("UTF-8")
      doc = Nokogiri::HTML::DocumentFragment.parse file
      svg = doc.at_css "svg"
      svg["class"] = options[:class] if options[:class].present?
    else
      doc = "<!-- SVG #{filename} not found -->"
    end

    raw doc
  end
  # --------------------------------------------------------------------------------------------------------
  # ADDING 'ACTIVE' TO ELEMENTS
  def current_class?(test_path)
    return 'active' if request.path == test_path
    ''
  end

  # --------------------------------------------------------------------------------------------------------

  def cl_img(g)
    if g.actor
      'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_s_kdx5uw.svg'
    elsif g.director
      'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_r_igcrfo.svg'
    else g.texter
      'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_t_ctanq7.svg'
    end
  end

  # --------------------------------------------------------------------------------------------------------
  #FILTER SVG STICKERS FOR KOMMENDE SECTION
  def sticker_srt(g)
    if g.actor
      'actor-sticker'
    elsif g.director
      'director-sticker'
    else g.texter
      'texter-sticker'
    end
  end

end
