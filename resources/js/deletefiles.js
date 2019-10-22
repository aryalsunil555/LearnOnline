<script language="JavaScript">
    <!--
    function delfile()
  {
   var readfile="<?php=$readfile?>";
             var fso = new ActiveXObject("Scripting.FileSystemObject");
             fileBool = fso.FileExists("uploads/" + readfile);
             if(fileBool)
     {
        document.write("Test-fileBool");
fso.DeleteFile("uploads/" + readfile,true);
}
}
//-->
</script>