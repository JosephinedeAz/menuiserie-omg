export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(ordre asc){ auteur, date, lieu, contenu }`

export const CONFIANCE_QUERY = `*[_type == "confiance"][0]{ stat1Valeur, stat1Label, stat2Valeur, stat2Label }`
