module ApplicationHelper
  # ADDING 'ACTIVE' TO ELEMENTS
  def current_class?(test_path)
    return 'active' if request.path == test_path
    ''
  end

  def cl_img(g)
    if g.actor
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/c_scale,w_40/v1688568721/rolf_sommer/drak_blue_s_3x_lhtf5u.png'
    elsif g.director
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/c_scale,w_40/v1688568721/rolf_sommer/drak_blue_r_3x_l0b6ei.png'
    else g.texter
        'https://res.cloudinary.com/dm4hnoj7v/image/upload/c_scale,w_40/v1688568721/rolf_sommer/drak_blue_t_3x_j7wk0n.png'
    end
  end
end
