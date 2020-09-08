import formatMoney from '@/helpers/formatMoney.helpers'

export const mainMixin = {
  methods: {
    mixinFormatMoney(value) { return formatMoney(value) }
  }
}