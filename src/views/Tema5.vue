<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Consideraciones importantes para una auditoría

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.col-xl-10.mx-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 De acuerdo con la norma GTC-ISO 19011:2018, una auditoría de sistemas de gestión se debe establecer bajo ciertas condiciones que permitan la construcción y desarrollo de la misma, en la organización.
    
    .container-title.mb-5
      h3 Consideraciones Importantes Auditoría
    
    p.mb-5 Las auditorías de los sistemas de gestión de la seguridad de la información, deben ser establecidas teniendo en cuenta algunas condiciones que favorecerán, rotundamente, tanto su construcción como su desarrollo.

    img.mb-5(src="@/assets/curso/temas/tema5/img-2.svg" alt="imagen decorativa")
    p.mb-5 El esquema de auditoría contempla:

    .mx-xl-0.mx-auto.d-flex.flex-wrap.justify-content-center.justify-content-xl-start.ms-xl-5.ps-xl-5.mb-5
      img.col-lg-5.col-xl-4.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 400px" alt="imagen decorativa")
      .col-lg-7.col-xl-6.ps-lg-4
        ol.lista-ol--cuadro.lista-ol--separador
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 1
            | El establecimiento de los objetivos del programa.
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 2
            | La determinación y evaluación de los riesgos y oportunidades.
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 3
            | El establecimiento del programa de auditoría. 
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 4
            | La implementación del programa de auditoría.
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 5
            | El seguimiento que se hará a ese programa de auditoría.
          li
            .lista-ol--cuadro__vineta(style="background-color: #E01650")
              span 6
            | La respectiva revisión y mejora del programa.
    p Los elementos más significativos, que deben incorporarse para el exitoso desarrollo de la auditoría; incorporan al ciclo PHVA: planificar, hacer, verificar, actuar, ciclo común en todos los sistemas de gestión.
      br
      |Una vez construido el esquema de auditoría se da inicio a la auditoría en la cual se preparan las actividades para la misma, se ejecutan tales actividades, se prepara y distribuye el informe, con el cual se cierra el proceso de auditoría.
      br
      |Importante tener en cuenta que lo que hace que la auditoría sea un proceso completo es la realización de las actividades de seguimiento de la misma. Acción que está dentro de la fase Actuar del ciclo PHVA.
    

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
