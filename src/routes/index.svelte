<script lang="ts">
  import 'carbon-components-svelte/css/white.css';
  import { DataTable, Link } from 'carbon-components-svelte';
  import { Launch16 } from 'carbon-icons-svelte';

  import projects from '$lib/data/projects.yaml';

  const headers = [
    { key: 'index', value: '#' },
    { key: 'icon', value: '' },
    { key: 'name', value: 'Name' },
    { key: 'type', value: 'Type' },
    { key: 'title', value: 'Title' },
    { key: 'description', value: 'Description' },
    { key: 'author', value: 'Author' }
  ];
  const rows = projects.map((p, i) => ({ ...p, id: p.name, index: i + 1 }));
  const title = 'Проекты клуба Борадач';
  const description = 'Список запущенных проектов участниками клуба Бородач';
</script>

<DataTable
  {title}
  {description}
  {headers}
  {rows}
  size="medium"
  sortable={true}
  zebra={true}
  stickyHeader={false}
>
  <span slot="cell" let:row let:cell>
    {#if cell.key === 'icon'}
      {#if row.icon}
        <img src={row.icon} alt="" class="icon" />
      {/if}
    {:else if cell.key === 'name'}
      <Link icon={Launch16} href={row.links[0]} target="_blank">
        {cell.value}
      </Link>
    {:else if cell.key === 'author'}
      <Link icon={Launch16} href="https://t.me/{cell.value}" target="_blank">
        {cell.value}
      </Link>
    {:else}{cell.value || ''}{/if}
  </span>
</DataTable>

<style>
  .icon {
    width: 32px;
    height: 32px;
  }
</style>
