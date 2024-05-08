import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className="fixed bottom-0 w-full">
            <div className="bg-blue-300">
                <center>
                    <div className="container mx-auto item-center">
                        <h3 className="text-black font-bold text-xl">Visita nuestras redes</h3>
                        <Link to="https://www.facebook.com/watch/?ref=search&v=239410645854500&external_log_id=27025463-bfc3-4b36-9588-33cc9a808c00&q=spy%20x%20family%20temp%202%20capitulo%209%20latino&locale=es_LA">
                            <FontAwesomeIcon icon={faFacebook} className="h-[35px] w-[35px] mr-4" />
                        </Link>

                        <Link to="https://twitter.com/i/status/1752191915548700675">
                            <FontAwesomeIcon icon={faTwitter} className="h-[35px] w-[35px] mr-4" />
                        </Link>

                        <Link to="https://www.tiktok.com/@petronapu495/video/7335298303204068613?is_from_webapp=1&sender_device=pc">
                            <FontAwesomeIcon icon={faTiktok} className="h-[35px] w-[35px] mr-4" />
                        </Link>

                        <Link to="https://www.youtube.com/watch?v=P3olkO8YQlo">
                            <FontAwesomeIcon icon={faInstagram} className="h-[35px] w-[35px] mr-4" />
                        </Link>

                        <Link to="https://www.youtube.com/watch?v=P3olkO8YQlo">
                            <FontAwesomeIcon icon={faYoutube} className="h-[35px] w-[35px]" />
                        </Link>
                    </div>
                </center>
            </div>
        </footer>
    )
}
