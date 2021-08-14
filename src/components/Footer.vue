
<!--  Samo ti meni napisi sta bi trebao jos, tj jesam trebao nesto povući s boostrapa ili,
 pa cu se ja igrati ako se imam kad igrat :D -->

<template>
    <footer class="footer ">
        <div class="footer-contact">
                <h4>Kontakt</h4>
            <p>  <b-icon-signpost-fill class="b-icon" /> Široki Brijeg, BiH</p>
            <div class="contact-footer">
                <p>  <b-icon-telephone class="b-icon" /> + 63 000 111</p>
                <p> <b-icon-envelope class="b-icon" /> kamir@gmail.com</p>
            </div>
        </div>
        <div class="footer-products">
            <h4>Proizvodi</h4>
            <ul>
                <li>Protuprovala</li>
                <li>Videonadzor</li>
                <li>Vatrodojava</li>
                <li>Evidencija RV</li>
                <li>Automatizacija</li>
            </ul>
        </div>
         <div class="footer-company">
            <p>Vijesti</p>
            <p>O nama</p>
        </div>
   </footer>
</template>

<script>
    export default {
        
    }
</script>

<style >
@media only screen and (max-width: 680px) {
.footer-contact , .footer-products{
border-bottom: 1px solid rgba(128, 128, 128, 0.767);
margin: 6px;
/* padding: 3px; */
}
.footer-company {
    border-bottom: 1px solid rgba(128, 128, 128, 0.767);
}
}
 .footer-products, .footer-contact,  .footer-company{
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-right: 1px solid rgba(128, 128, 128, 0.767);
} 
.b-icon {
    margin-right: 5px;
    color: rgba(128, 128, 128, 0.993);
   font-size: 18px;
}

.footer-products ul li {
    font-size: 17px;
    line-height: 30px;
}
ul {
    list-style-type: none;
}
.footer h4 {
    font-size: 22px;
}
.footer {
    background: #000000;
   width: 100%;
   padding: 10px;
    min-height: 400px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
</style>