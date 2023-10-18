<template>
  <div>
    <canvas ref="pdfCanvas"></canvas>
    <button @click="nextPage">Next Page</button>
    <button @click="prevPage">Previous Page</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, toRefs, watch, defineComponent } from "vue";
import * as pdfjs from "pdfjs-dist/es5/build/pdf.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.7.570/pdf.worker.min.js`;

const props = defineProps({
  pdfUrl: { type: String, default: null },
});

const { pdfUrl } = toRefs(props);

const pdf = ref<any>(null);
const pageNum = ref<number>(1);
const totalPages = ref<number>(0);
const pdfCanvas = ref(null);

watch(
  () => pdfUrl.value, // Assuming pdfUrl is a ref
  () => {
    loadPdf(); // Assuming loadPdf is a method defined in setup
  },
  { immediate: true }
);

async function loadPdf() {
  const loadingTask = pdfjs.getDocument(pdfUrl.value);
  pdf.value = await loadingTask.promise;
  totalPages.value = pdf.value.numPages;
  renderPage(pageNum.value);
}
async function renderPage(num) {
  const page = await pdf.value.getPage(num);
  const scale = 1.5;
  const viewport = page.getViewport({ scale });

  const canvas = pdfCanvas.value;
  const context = canvas.getContext("2d");
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  const renderContext = {
    canvasContext: context,
    viewport,
  };

  await page.render(renderContext);
}
function nextPage() {
  if (pageNum.value < totalPages.value) {
    pageNum.value++;
    renderPage(pageNum.value);
  }
}
function prevPage() {
  if (pageNum.value > 1) {
    pageNum.value--;
    renderPage(pageNum.value);
  }
}
</script>

<style scoped></style>
