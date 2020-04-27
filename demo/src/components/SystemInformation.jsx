import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Hardware from "./Hardware";
import Cpu from "./Cpu";
import Memory from "./Memory";
import Battery from "./Battery";
import Graphics from "./Graphics";
import Os from "./Os";
import Processes from "./Processes";
import Disk from "./Disk";
import Network from "./Network";
import Wifi from "./Wifi";

const SystemInformation = () => {
  const { loading, error, data } = useQuery(SYSTEM_INFORMATION);
  const refreshPage = () => window.location.reload(false);

  if (loading)
    return (
      <div>
        <h2 class="text-success"> Loading...</h2>
        <h4>Fetching data from your operating system</h4>
        <p>Please wait..</p>
      </div>
    );

  if (error)
    return (
      <div>
        <h3 class="text-warning">
          ('_') <br />
          Error! something unexpected has happened
        </h3>
        <button class=" btn btn-secondary btn-lg" onClick={refreshPage}>
          Retry
        </button>
      </div>
    );
  console.log(data);

  return (
    <div class="container">
      <div class="row">
        <Hardware data={data} />
        <Cpu data={data} />
        <Memory data={data} />
        <Battery data={data} />
        <Graphics data={data} />
        <Os data={data} />
        <Processes data={data} />
        <Disk data={data} />
        <Network data={data} />
        <Wifi data={data} />
      </div>
    </div>
  );
};

const SYSTEM_INFORMATION = gql`
  {
    Hardware {
      bios {
        vendor
        version
        releaseDate
        revision
      }
      system {
        manufacturer
        brand
        version
        serial
        uuid
        sku
      }
      chassis {
        manufacturer
        model
        type
        version
        serial
        assetTag
        sku
      }
      baseboard {
        manufacturer
        model
        version
        serial
        assetTag
      }
    }
    Cpu {
      cpu {
        manufacturer
        brand
        speed
        speedmin
        speedmax
        governor
        cores
        physicalCores
        processors
        socket
        vendor
        family
        model
        stepping
        revision
        voltage
      }
      flag {
        string
      }
      cache {
        l1d
        l1i
        l2
        l3
      }
      temperature {
        main
        max
      }
      currentspeed {
        avg
        min
        max
      }
    }
    Memory {
      memory {
        total
        free
        speed
        used
        active
        buffcache
        buffers
        cached
        slab
        available
        swaptotal
        swapused
        swapfree
      }
      layout {
        size
        bank
        type
        clockSpeed
        formFactor
        manufacturer
        partNum
        serialNum
        voltageConfigured
        voltageMin
        voltageMax
      }
      layouts {
        size
        bank
        type
        clockSpeed
        formFactor
        manufacturer
        partNum
        serialNum
        voltageConfigured
        voltageMin
        voltageMax
      }
    }
    Battery {
      battery {
        hasbattery
        cyclecount
        ischarging
        designedcapacity
        maxcapacity
        currentcapacity
        capacityUnit
        voltage
        percent
        timeremaining
        acconnected
        type
        model
        manufacturer
        serial
      }
    }
    Graphics {
      display {
        model
        vendor
        main
        builtin
        connection
        sizex
        sizey
        pixeldepth
        resolutionx
        resolutiony
        currentResX
        currentResY
        positionX
        positionY
        currentRefreshRate
      }
      displays {
        model
        vendor
        main
        builtin
        connection
        sizex
        sizey
        pixeldepth
        resolutionx
        resolutiony
        currentResX
        currentResY
        positionX
        positionY
        currentRefreshRate
      }
      controller {
        model
        vendor
        bus
        vram
        vramDynamic
      }
      controllers {
        model
        vendor
        bus
        vram
        vramDynamic
      }
    }
    OS {
      info {
        platform
        distro
        release
        codename
        kernel
        arch
        codepage
        logofile
        serial
        build
        servicepack
        uefi
      }
      user {
        user
        tty
        date
        time
        ip
        command
      }
      uuid {
        os
      }
      users {
        user
        tty
        date
        time
        ip
        command
      }
      shell {
        string
      }
      versions {
        node
        npm
      }
    }
    Processes {
      process {
        all
        running
        blocked
        sleeping
        unknown
      }
      fullLoad {
        number
      }
      currentLoad {
        avgload
        currentload
        currentload_user
        currentload_system
        currentload_nice
        currentload_idle
        currentload_irq
        raw_currentload
      }
    }

    DiskFileSystem {
      FsSize {
        fs
        type
        size
        used
        use
        mount
      }
      disksIO {
        rIO
        wIO
        tIO
        rIO_sec
        wIO_sec
        tIO_sec
        ms
      }
      fsStats {
        rx
        wx
        tx
        rx_sec
        wx_sec
        tx_sec
        ms
      }
      diskLayout {
        device
        type
        name
        vendor
        size
        totalCylinders
        totalHeads
        totalTracks
        totalSectors
        tracksPerCylinder
        sectorsPerTrack
        bytesPerSector
        firmwareRevision
        serialNum
        interfaceType
        smartStatus
      }
      fsOpenFiles {
        max
        allocated
        available
      }
      blockDevices {
        name
        type
        fstype
        mount
        size
        physical
        uuid
        label
        model
        serial
        removable
        protocol
      }
    }
    Network {
      networkStats {
        iface
        operstate
        rx_bytes
        rx_dropped
        rx_errors
        tx_bytes
        tx_dropped
        tx_errors
        rx_sec
        tx_sec
        ms
      }
      networkInterface {
        iface
        ifaceName
        ip4
        ip6
        mac
        internal
        virtual
        operstate
        type
        duplex
        mtu
        speed
        dhcp
        dnsSuffix
        ieee8021xAuth
        ieee8021xState
        carrierChanges
      }
      networkInterfaces {
        iface
        ifaceName
        ip4
        ip6
        mac
        internal
        virtual
        operstate
        type
        duplex
        mtu
        speed
        dhcp
        dnsSuffix
        ieee8021xAuth
        ieee8021xState
        carrierChanges
      }
      networkConnections {
        protocol
        localaddress
        localport
        peeraddress
        peerport
        state
        pid
        process
      }
      networkGatewayDefault {
        string
      }
      networkInterfaceDefault {
        string
      }
    }
    Wifi {
      wifiNetwork {
        ssid
        bssid
        mode
        channel
        frequency
        signalLevel
        quality
      }
      wifiNetworks {
        ssid
        bssid
        mode
        channel
        frequency
        signalLevel
        quality
      }
    }
    Docker {
      info {
        id
      }
    }
    VirtualBox {
      info {
        id
      }
    }
  }
`;

export default SystemInformation;
