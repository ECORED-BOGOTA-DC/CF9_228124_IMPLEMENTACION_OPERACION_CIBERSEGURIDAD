<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .container-100.pt-4(style="background: linear-gradient(180deg, rgba(220,206,227,1) 60%, rgba(255,255,255,1) 60%);")
      .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
        img(src="@/assets/curso/temas/img-1.svg" style="max-width: 85px" alt="Imagen decorativa de un documento" data-aos="fade-right")
        p.ps-md-4.mb-0(data-aos="fade-left") Le invitamos a adentrarse en el estudio de este componente, reconociendo el valor fundamental que tiene para su formación como tecnólogo/a en implementación y operación de la ciberseguridad.
      p.mb-5 Se describen los desafíos y riesgos a los que las empresas se enfrentan en el entorno digital actual, así como los mejores procedimientos y regulaciones para garantizar la seguridad de la información.
      .d-flex.flex-wrap
        LineaTiempoD.color-acento-contenido.col-lg-8.pe-lg-4
          p(numero="1" titulo="Contexto Norma ISO/IEC 27001:2013") Dentro del ciclo que enmarca la norma ISO/IEC 27001:2013, se establece una fase que permite evaluar el rendimiento del sistema de seguridad de la información y, en especial, los controles que fueron propuestos para mejorar la seguridad de los activos de información de la organización.
          p(numero="2" titulo="Evaluación Norma ISO/IEC 27001:2013") Esta fase implica establecer una métrica, bajo la cual se identifiquen los rangos de valores aceptables y no aceptables, de cada control. 
            br
            br
            |A partir de esta evaluación se podrán establecer los mecanismos de mejora de los mismos controles, o de cambio completo de un determinado control, en caso de ser necesario.
          p(numero="3" titulo="Evaluación estrategia de seguridad ") “Lo que no se mide no se puede mejorar. Lo que no se mejora, se degrada siempre” William Thomson Kelvin
            br
            |Se considera que la evaluación de la estrategia de seguridad deba realizarse de manera periódica, convirtiéndose en punto de partida para la adopción de la mejora continua.
        img.mb-auto.d-none.d-lg-flex.col-lg-4(src="@/assets/curso/temas/img-2.svg" style="max-width: 400px" alt="Imagen decorativa" data-aos="fade-left")
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
