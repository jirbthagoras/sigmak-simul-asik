#!/bin/bash

mkdir -p /var/app/current/node_modules
# For security purpose, DO NOT fill DIRECTLY with related values
EFS_MOUNT_DIR=$EFS_MOUNT_DIR
EFS_FILE_SYSTEM_ID=$EFS_FILE_SYSTEM_ID
###

echo "Mounting EFS filesystem ${EFS_FILE_SYSTEM_ID} to directory ${EFS_MOUNT_DIR} ..."

# Insall dulu EFS nya
yum install -y amazon-efs-utils

# Stop NFS ID Mapper
echo 'Stopping NFS ID Mapper...'
service rpcidmapd status &> /dev/null
if [ $? -ne 0 ] ; then
    echo 'rpc.idmapd is already stopped!'
else
    service rpcidmapd stop
    if [ $? -ne 0 ] ; then
        echo 'ERROR: Failed to stop NFS ID Mapper!'
        exit 1
    fi
fi


# check EFS if mount directory exist
echo 'Checking if EFS mount directory exists...'
if [ ! -d ${EFS_MOUNT_DIR} ]; then
    echo "Creating directory ${EFS_MOUNT_DIR} ..."

    mkdir -p ${EFS_MOUNT_DIR}
    if [ $? -ne 0 ]; then
        echo 'ERROR: Directory creation failed!'
        exit 1
    fi
else
    echo "Directory ${EFS_MOUNT_DIR} already exists!"
fi
###

# mount your EFS here
mountpoint -q ${EFS_MOUNT_DIR}
if [ $? -ne 0 ]; then
    echo "mount -t nfs -o tls ${EFS_FILE_SYSTEM_ID}:/ ${EFS_MOUNT_DIR}"

    mount -t efs -o tls ${EFS_FILE_SYSTEM_ID}:/ ${EFS_MOUNT_DIR}
    if [ $? -ne 0 ] ; then
        echo 'ERROR: Mount command failed!'
        exit 1
    fi
    chmod -R 666 ${EFS_MOUNT_DIR}
    runuser -l  ec2-user -c " sudo touch ${EFS_MOUNT_DIR}/it_works"
    if [[ $? -ne 0 ]]; then
        echo 'ERROR: Permission Error!'
        exit 1
    else
        runuser -l  ec2-user -c "rm -f ${EFS_MOUNT_DIR}/it_works"
    fi
else
    echo "Directory ${EFS_MOUNT_DIR} is already a valid mountpoint!"
fi
###

echo 'EFS mount complete.'