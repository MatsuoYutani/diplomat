<script>
  import { Link } from "svelte-routing";

  let addressPath = window.location.href; // - "https://";
  addressPath = addressPath.replace("http://localhost:5173", "");
</script>

<!-- TODO Remover -->
<p><Link to="/">Home</Link> - {addressPath}</p>
