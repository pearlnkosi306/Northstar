function checkInventory(){
  const product=qs("#product").value;
  const size=qs("#size").value;
  const status=NORTHSTAR_DEMO.inventory[product]?.[size] || "Out of Stock";
  const result=qs("#stockResult");
  const cls=status==="In Stock"?"in":status==="Low Stock"?"low":"out";
  if(status==="Out of Stock"){
    result.innerHTML=`<div class="warning"><h2>Currently Unavailable</h2>
    <p><strong>${esc(product)} — ${esc(size)}</strong> is currently out of stock in the demonstration inventory.</p>
    <p>You do not need to stop here. We have provided available alternatives and a stock-notification pathway.</p></div>
    <div class="result-card"><h3>Available alternatives</h3>
    <p>Try another size of the same product or view alternative products currently available.</p>
    <div class="actions"><a class="button" href="alternatives.html?product=${encodeURIComponent(product)}&size=${encodeURIComponent(size)}">View Available Alternatives</a>
    <a class="button secondary" href="notification.html?product=${encodeURIComponent(product)}&size=${encodeURIComponent(size)}">Request Stock Notification</a>
    <a class="button secondary" href="stock.html">Check Another Size</a></div></div>`;
  } else {
    result.innerHTML=`<div class="success"><h2>${esc(status)}</h2><p><strong>${esc(product)} — ${esc(size)}</strong> is currently ${status.toLowerCase()} in the demonstration inventory.</p>
    <div class="actions"><a class="button" href="alternatives.html?product=${encodeURIComponent(product)}&size=${encodeURIComponent(size)}">View Other Available Options</a><a class="button secondary" href="stock.html">Check Another Size</a></div></div>`;
  }
}
