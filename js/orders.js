function checkOrder(){
  const orderNo=qs("#orderNumber").value.trim().toUpperCase();
  const identifier=qs("#identifier").value.trim();
  const result=qs("#orderResult");
  if(!orderNo || !identifier){
    result.innerHTML='<div class="alert"><strong>Information required.</strong><br>Please enter your order number and verification information to continue.</div>';return;
  }
  const order=NORTHSTAR_DEMO.orders[orderNo];
  if(!order || order.identifier!==identifier){
    result.innerHTML='<div class="alert"><strong>Order not found.</strong><br>We could not find an order matching the information provided. Check the details and try again.</div><div class="actions"><a class="button secondary" href="../index.html">Return to Support</a><a class="button" href="human-support.html">Request Human Support</a></div>';return;
  }
  localStorage.setItem("nsOrder",orderNo);
  result.innerHTML=`<div class="success"><strong>Order verified.</strong><br>We found order ${esc(orderNo)} in the demonstration system.</div>
  <div class="result-card">
    <h2>${esc(order.item)}</h2>
    <div class="kpi-grid">
      <div class="kpi"><span class="meta">Status</span><strong>${esc(order.status)}</strong></div>
      <div class="kpi"><span class="meta">Delivery method</span><strong>${esc(order.deliveryMethod)}</strong></div>
      <div class="kpi"><span class="meta">Estimated delivery</span><strong>${esc(order.estimatedDelivery)}</strong></div>
    </div>
    <p>${esc(NORTHSTAR_DEMO.policy.standardDeliveryExplanation)}</p>
    <div class="actions">
      <a class="button" href="order-tracking.html?order=${encodeURIComponent(orderNo)}">View Delivery Progress</a>
      <a class="button secondary" href="returns.html?order=${encodeURIComponent(orderNo)}">Start a Return</a>
      <a class="button secondary" href="human-support.html?order=${encodeURIComponent(orderNo)}">Report a Delivery Problem</a>
    </div>
  </div>`;
}
