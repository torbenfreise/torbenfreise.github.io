<script lang="ts">
  export let open: boolean = false;
  export let width: number = 260;
</script>

<aside
  class="left-sidebar"
  role="navigation"
  aria-hidden={!open}
  style="width: {width}px; transform: translateX({open ? 0 : -width}px);"
>
  <div class="sidebar-inner">
    <h2 class="brand">Site</h2>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/projects/totp">TOTP generator</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </div>
</aside>

<style>
  .left-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: var(--color-primary-50, #fff);
    border-right: 1px solid rgba(0,0,0,0.06);
    box-shadow: 2px 0 8px rgba(0,0,0,0.04);
    z-index: 50;
    transition: transform 220ms ease;
    overflow: auto;
  }

  .sidebar-inner {
    padding: 1rem 0.75rem;
  }

  .brand {
    margin: 0 0 1rem 0;
    font-size: 1.1rem;
    padding: 0 0.5rem;
  }

  .left-sidebar nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .left-sidebar nav li a {
    display: block;
    padding: 0.6rem 0.5rem;
    color: inherit;
    text-decoration: none;
    border-radius: 6px;
  }

  .left-sidebar nav li a:hover {
    background: rgba(0,0,0,0.03);
  }
</style>
