<script setup lang="ts">
   import {
      TableRow,
      TableCell,
    } from "../Table" 

</script>
<template>
    <TableRow>
      <TableCell colspan="999"   class=" w-full text-center h-52 text-primary">
        <slot>No data available</slot>
      </TableCell>
    </TableRow>
  </template>
  