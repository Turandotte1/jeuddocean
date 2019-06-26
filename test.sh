npm run start > /tmp/back.output & PIDBACK=$!
echo started back $PIDBACK
pushd front
npm run start > /tmp/front.output & PIDFRONT=$!
echo started front $PIDFRONT
popd
pushd image-analyzer
python gridmaker.py > /tmp/python.output & PIDPYTHON=$!
echo started python $PIDPYTHON
popd
while true; do
    read -p "Do you wish to kill this program?" yn
    case $yn in
        [Yy]* ) kill $PIDPYTHON; kill $PIDFRONT; kill $PIDBACK; break;;
        [Nn]* ) echo $PIDPYTHON;;
        * ) echo "Please answer yes or no.";;
    esac
done
