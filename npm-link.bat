cd ./packages/ketchup
echo gone in ketchup
call npm link
echo link ketchup done
pause 
cd ../ketchup-react
echo gone in ketchup-react
call npm link @sme.up/ketchup
echo link ketchup in ketchup-react done
pause