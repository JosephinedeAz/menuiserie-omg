import { serviceType } from './service'
import { realisationType } from './realisation'
import { testimonialType } from './testimonial'
import { pageRealisationsType } from './pageRealisations'
import { confianceType } from './confiance'

export const schema = {
  types: [serviceType, realisationType, testimonialType, pageRealisationsType, confianceType],
}
