

### tkn pipeline start build-and-deploy -p git-url=http://github.com/openshift-pipelines/vote-api.git -p IMAGE=image-registry.openshift-image-registry.svc:5000/pipelines-tutorial/vote-api


### run pipeline ##

tkn pipeline start build-and-deploy \
    -w name=shared-workspace,claimName=source-pvc \
    -p deployment-name=xpapibackend \
    -p git-url=https://github.com/nttdevops/xpapibackend.git \
    -p git-revision=main \
    -p IMAGE=image-registry.openshift-image-registry.svc:5000/xp-apibackend/xpapibackend \
    --use-param-defaults

