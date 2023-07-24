module ApplicationHelper
  # ADDING 'ACTIVE' TO ELEMENTS
  def current_class?(test_path)
    return 'active' if request.path == test_path
    ''
  end

  def cl_img(g)
    if g.actor
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_s_kdx5uw.svg'
    elsif g.director
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_r_igcrfo.svg'
    else g.texter
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/v1690207472/rolf_sommer/star_neu_t_ctanq7.svg'
    end
  end

  def work_as(g)
    if g.actor
      'S'
    elsif g.director
      'R'
    else g.texter
      'T'
    end
  end
end
