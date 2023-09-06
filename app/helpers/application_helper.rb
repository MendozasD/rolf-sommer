module ApplicationHelper
  # --------------------------------------------------------------------------------------------------------
  # ADDING 'ACTIVE' TO ELEMENTS
  def current_class?(test_path)
    return 'active' if request.path == test_path
    ''
  end

  def white_color_font(test_path)
    return 'white-color-font' if request.path == test_path
    ''
  end

  def id_link_dropdown(test_path)
    return 'id-link-dropdown' if request.path == test_path
    ''
  end
  # --------------------------------------------------------------------------------------------------------
  #FILTER SVG STICKERS FOR KOMMENDE SECTION
  def sticker_srt(g)
    if g.actor
      'actor-sticker.png'
    elsif g.director
      'director-sticker.png'
    else g.texter
      'texter-sticker.png'
    end
  end
end
