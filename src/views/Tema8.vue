<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Clasificación de auditoría informáticas

    .col-xl-10.mx-auto.d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-1.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        .bloque-texto-b.bloque-texto-b-edit.color-primario.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            p.mb-0 Las auditorías, dependiendo del alcance y de los activos a evaluar, se pueden clasificar en: auditoría informática y auditoría de sistemas. Ambas clases de auditorías cuentan con aspectos, principios y elementos específicos en sus fases.

    p.mb-5(data-aos="fade-right") Aquí se las presentamos:

    TabsC.color-secundario.mb-5(data-aos="fade-left")
      .py-3.py-md-4(titulo="Auditoría informática")
        .d-flex.flex-wrap.col-xl-10.mx-auto
          img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-2.png" style="max-width: 400px" alt="imagen decorativa")
          p.ps-lg-4.col-lg-7 Esta auditoría busca recolectar, consolidar y evaluar las evidencias que demuestren si la organización realizó la implementación de controles, y acciones para la protección de los activos de información.
      .py-3.py-md-4(titulo="Auditoría informática y objetivos")
        .d-flex.flex-wrap.col-xl-10.mx-auto
          img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-3.png" style="max-width: 400px" alt="imagen decorativa")
          p.ps-lg-4.col-lg-7 Este tipo de auditorías se puede ser de tipo interno o externo con el objetivo de obtener un informe objetivo.
      .py-3.py-md-4(titulo="Las auditorías informáticas y su tipo")
        .d-flex.flex-wrap.col-xl-10.mx-auto
          img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-4.png" style="max-width: 400px" alt="imagen decorativa")
          p.ps-lg-4.col-lg-7 La aplicación de controles y acciones para la protección de activos de información, se evidencia a partir del logro de los objetivos de la auditoría, como son:
            br
            |Protección de activos e integridad de datos.
            br
            |Gestión de protección de activos, de manera eficaz y eficiente.
      .py-3.py-md-4(titulo="La auditoría de sistemas")
        .d-flex.flex-wrap.col-xl-10.mx-auto
          img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-5.png" style="max-width: 400px" alt="imagen decorativa")
          p.ps-lg-4.col-lg-7 En este tipo de auditoría se busca evaluar el manejo de la protección de los activos de información que son administrados en los sistemas de información de la organización, incluyendo las capacidades del recurso humano para una adecuada gestión de estos activos.
      .py-3.py-md-4(titulo="Auditorías de sistemas y su tipo")
        .d-flex.flex-wrap.col-xl-10.mx-auto
          img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema8/img-6.png" style="max-width: 400px" alt="imagen decorativa")
          p.ps-lg-4.col-lg-7 Estas auditorías son de tipo preventivo, y abarca la revisión de dispositivos de hardware como sistemas de información.
        
</template>

<script>
export default {
  name: 'Tema8',
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
