function createSupportRequest(){
  const type=qs("#issueType").value, ref=qs("#reference").value.trim(), desc=qs("#description").value.trim(), result=qs("#supportResult");
  if(!desc){result.innerHTML='<div class="alert">Please describe the issue before submitting the support request.</div>';return;}
  const ticket=makeRef("SUP");
  result.innerHTML=`<div class="success"><h2>Support Request Created</h2>
  <p>Your demonstration support request has been recorded.</p>
  <p><strong>Support reference:</strong> ${ticket}</p>
  <p><strong>Issue type:</strong> ${esc(type)}</p>
  ${ref?`<p><strong>Related reference:</strong> ${esc(ref)}</p>`:""}
  <p>Keep the reference number for demonstration follow-up. No real support ticket has been sent to an external system.</p>
  <div class="actions"><a class="button" href="../index.html">Return to Support Dashboard</a><a class="button secondary" href="human-support.html">Create Another Request</a></div></div>`;
}
