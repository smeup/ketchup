<template>
  <div>
    <h3>Base</h3>
    <kup-chip-knowledge
      name="standard"
      label="Label"
      @kupChipKnowledgeClick="kupChipKnowledgeClick"
      >...</kup-chip-knowledge
    >

    <h3>Base con immagine</h3>
    <kup-chip-knowledge
      name="standard2"
      label="Label"
      @kupChipKnowledgeClick="kupChipKnowledgeClick"
      img-url="./header_logo.png"
      >...</kup-chip-knowledge
    >

    <h3>Base chiudibile</h3>
    <kup-chip-knowledge
      name="chiudibile"
      label="Label"
      closable="true"
      @kupChipKnowledgeClick="kupChipKnowledgeClick"
      @kupChipKnowledgeClose="kupChipKnowledgeClose"
      >...</kup-chip-knowledge
    >

    <h3>Chiudibile con immagine</h3>
    <kup-chip-knowledge
      name="chiudibileImg"
      label="Label"
      closable="true"
      @kupChipKnowledgeClick="kupChipKnowledgeClick"
      @kupChipKnowledgeClose="kupChipKnowledgeClose"
      img-url="./header_logo.png"
      >...</kup-chip-knowledge
    >

    <h3>Base disabilitato</h3>
    <kup-chip-knowledge name="disabilitato" label="Label" closable disabled
      >...</kup-chip-knowledge
    >
  </div>
</template>

<script>
export default {
  methods: {
    kupChipKnowledgeClose() {
      alert('Close called (.vue).');
    },

    kupChipKnowledgeClick() {
      alert('Click called (.vue).');
    },
  },
};
</script>
