<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Fases de la auditoría
    p.mb-5 De acuerdo al diagrama de flujo presentado por la metodología de la norma GTC-ISO 19011:2018, se pueden establecer tres fases para el desarrollo de una auditoría: la planeación, la implementación y el monitoreo de la misma.
    img.mb-5.mx-auto(src="@/assets/curso/temas/tema7/img-1.svg" style="max-width: 400px" alt="imagen decorativa")
    p.mb-5 Revise la siguiente infografía, y profundice en las fases de la auditoría. Le recordamos que puede llevar registro de los aspectos más destacados, en su libreta personal de apuntes.

    ImagenInfografica.color-acento-contenido.col-xl-8.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema7/img-2.svg' alt='')

      .tarjeta.p-3(x="3.8%" y="50.8%" numero="+" style="background-color: #FFECD4")
        p.mb-0 La auditoría debe ser programada, aprobada e informada a todos los lideres de procesos e interesados con tiempo de antelación.
      .tarjeta.p-3(x="9.2%" y="65%" numero="+" style="background-color: #FFECD4")
        p.mb-0 Para las auditorías, es necesario que todos los líderes de procesos y equipos estén informados y alineados en atención a los requerimientos de los auditores, de tal manera que pueda ser presentada cualquier evidencia o requerimiento que sea solicitado por el auditor.
      .tarjeta.p-3(x="17.4%" y="77%" numero="+" style="background-color: #FFECD4")
        p.mb-0 De acuerdo con el ciclo PHVA, las auditorías deben de realizarse por lo menos una vez en el año, aunque si la organización considera, debido a la criticidad de sus procesos, o con el fin de determinar alguna verificación, que deban hacer más en este periodo de tiempo, también es válido; esto ayudaría a evaluar e identificar falencias en los criterios de auditoría.
      .tarjeta.p-3(x="26.7%" y="84.6%" numero="+" style="background-color: #FFECD4")
        p.mb-0 Para cada auditoría se debe contar con los informes de las auditorías anteriores, tanto internas como externas, y revisiones de la alta dirección. Además, estas auditorías deben realizarse antes de las auditorías de certificación y/o acreditación, ya que estas auditorías internas pueden detectar falencias que pueden corregirse para dicha evaluación.
      .tarjeta.p-3(x="43.6%" y="91.5%" numero="+" style="background-color: #FFECD4")
        p.mb-0 En este evento se realiza la apertura de la auditoría en la cual se presenta la metodología, tiempos, procesos, sistemas o cualquier detalle que permita identificar el alcance de la misma, se hace entrega de la información existente o de auditorías anteriores, y se da inicio al ejercicio de acuerdo a la programación establecida.
      .tarjeta.p-3(x="53.4%" y="92.7%" numero="+" style="background-color: #EEE5FE")
        p.mb-0 Una vez se finalice el ejercicio, el auditor realiza el informe, el cual es presentado durante el cierre de la auditoría.
      .tarjeta.p-3(x="63.2%" y="91.5%" numero="+" style="background-color: #EEE5FE")
        p.mb-0 Con el informe del auditor,  la alta dirección establecerá las acciones de mejora a futuro, a través de un plan de mejoramiento; estas acciones pueden ser correctivas, preventivas o de mejora.
      .tarjeta.p-3(x="89.2%" y="73.2%" numero="+" style="background-color: #FFECD4")
        p.mb-0 Este seguimiento debe realizarse de manera permanente con el fin de reportar avances y fortalecer aquellas acciones que pueden retrasar el cumplimiento de los objetivos.
      .tarjeta.p-3(x="96.3%" y="63.5%" numero="+" style="background-color: #FFECD4")
        p.mb-0 En esta fase, se busca realizar el seguimiento a las acciones establecidas en el último ejercicio, con el fin de validar su efectividad en la corrección de falencias o la adecuada implementación de nuevos controles.

</template>

<script>
export default {
  name: 'Tema3',
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
