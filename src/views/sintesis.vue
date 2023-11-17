<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La planificación de la evaluación de la seguridad digital es un proceso fundamental para garantizar la protección de la información y los activos digitales en cualquier organización. Esta planificación implica una serie de pasos esenciales que aseguran que se identifiquen y aborden adecuadamente las vulnerabilidades y amenazas a la seguridad digital.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis resume a través de un esquema los temas y subtemas abordados en el componente formativo y que son conocimiento esencial para alcanzar el resultado de aprendizaje. para este caso se profundizó en temas como las fases del sistema de gestión de seguridad de la información y las características de cada fase; de otra parte las diferentes técnicas y tipos de auditorías, entre otras cosas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
