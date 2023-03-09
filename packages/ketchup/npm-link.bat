cd ../../../gantt-component
echo gone in gantt-component
call npm link
echo link gantt-component done
pause 

cd ../ketchup/packages/ketchup
echo gone in ketchup
call npm link @sme.up/gantt-component
echo link gantt-component done
pause