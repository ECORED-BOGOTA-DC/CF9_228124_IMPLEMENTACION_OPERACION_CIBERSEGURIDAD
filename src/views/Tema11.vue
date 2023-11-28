<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 11
      h1 Aplicación de mediciones de seguridad

    .col-xl-10.mx-auto.d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema11/img-1.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-right")
      .col-lg-7.ps-lg-4
        .bloque-texto-b.bloque-texto-b-edit.color-primario.p-4(data-aos="fade-left")
          .bloque-texto-b__texto
            p.mb-0 Los líderes de procesos deben estar informados sobre cuáles son las métricas establecidas, y cómo estas ayudan a cumplir los objetivos de seguridad, con el fin de que se desarrollen y documenten las acciones encaminadas al cumplimiento de dichos objetivos.
    
    p.mb-5(data-aos="fade-right") Algunas generalidades de suma importancia y que debe tener en cuenta para la aplicación de mediciones de seguridad son:
    TabsA.color-primario.mb-5(data-aos="fade-left")
      .tarjeta.color-primario--borde.p-4(titulo="1. Aplicar mediciones<br class='d-md-none'/> busca" style="background-color: white")
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Representar los valores del nivel de seguridad de la organización.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Evaluar la eficiencia del SGSI en la organización.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Incluir niveles de seguridad que sirvan de guía para las revisiones del SGSI.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Evaluar la efectividad de los controles de seguridad en la organización.
      .tarjeta.color-primario--borde.p-4(titulo="2. Según método de<br class='d-md-none'/> evaluación<br class='d-none d-md-flex d-xxl-none'/> de atributos" style="background-color: white")
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | #[b Estos son objetivos:] los que se centran en una regla numérica (por ejemplo, de 1 a 5), que se pueden aplicar a las personas o a los procesos, se recomienda que se realice primero a los procesos.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | #[b Estos son subjetivos:] los que se centran en el criterio de los empleados o de los evaluadores externos.
      .tarjeta.color-primario--borde.p-4(titulo="3. Métodos de<br class='d-md-none'/> recolección de<br class='d-none d-md-flex d-xxl-none'/> información" style="background-color: white")
        p Según forma de aplicar mediciones a atributos, es común realizar:
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Cuestionarios.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Inspección visual.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Toma de notas.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Comparación de datos de diferentes momentos.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Muestreo.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Consulta directa a sistemas de información.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Entre otros.
      .tarjeta.color-primario--borde.p-4(titulo="4. Asociación con <br class='d-md-none'/>tipo de escala" style="background-color: white")
        p Realizada la medición de atributos, esta se asocia a un tipo de escala:
        ul.lista-ul--color.mb-5
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Ratio.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Nominal.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Intervalos.
          li
            i.fas.fa-circle(style="color: #8F52F5; font-size: 10px")
            | Ordinal.
    img.mx-auto(src="@/assets/curso/temas/tema11/img-2.svg" style="max-width: 610px" alt="imagen decorativa" data-aos="flip-up")
</template>

<script>
import TabsA from '@/components/TabsA.vue'
export default {
  name: 'Tema11',
  components: { TabsA },
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
