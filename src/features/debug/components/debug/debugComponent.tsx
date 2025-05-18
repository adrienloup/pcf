import { type ChangeEvent, useMemo, useState } from 'react';
import { useFactory, useFactoryDispatch } from '@/src/features/factory/infrastructure/useFactory.ts';
import { useLocation } from 'react-router-dom';
import { useAlertsDispatch } from '@/src/common/shared/components/alerts/useAlerts.ts';
import styles from '@/src/features/debug/components/debug/debug.module.scss';

export const DebugComponent = () => {
  const factory = useFactory();
  const setFactory = useFactoryDispatch();
  const location = useLocation();
  const setAlerts = useAlertsDispatch();
  const [alertsText, setAlertsText] = useState('Rev Tracker unlocked');
  const [clip, setClip] = useState('0');
  const [feature, setFeature] = useState('resources');
  const [funds, setFunds] = useState('0');
  const [wire, setWire] = useState('0');
  const [clipper, setClipper] = useState('0');
  const [trust, setTrust] = useState('0');
  const [memory, setMemory] = useState('0');
  const [processor, setProcessor] = useState('0');
  const [operation, setOperation] = useState('0');
  const [creativity, setCreativity] = useState('0');
  const [cash, setCash] = useState('0');

  const display = useMemo(() => {
    // const isDebug = location.search == '?debug';
    const isDebug = location.search.split('=')[0] == '?debug' ? location.search.split('=').pop() : '';
    // if (isDebug) {
    //   localStorage.setItem('_debug_3mma_0', 'debug');
    // } else {
    //   localStorage.removeItem('_debug_3mma_0');
    // }
    if (isDebug == '1') {
      localStorage.setItem('_debug_3mma_0', 'true');
    } else if (isDebug == '0') {
      localStorage.removeItem('_debug_3mma_0');
    }
    // return isDebug;
    return !!window.localStorage.getItem('_debug_3mma_0');
  }, [location.search]);

  const alertsChange = (e: ChangeEvent<HTMLInputElement>) => setAlertsText(e.target.value);
  const alertsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const alertsId = alertsText.replace(/\s/g, '');
    setAlerts({ type: 'ADD_ALERT', alert: { id: alertsId, text: alertsText } });
  };

  const featureChange = (e: ChangeEvent<HTMLInputElement>) => setFeature(e.target.value);
  const featureSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'UPDATE_FEATURE',
      feature: feature,
      disabled: true,
      enabled: true,
    });
    setFeature('');
  };

  const clipChange = (e: ChangeEvent<HTMLInputElement>) => setClip(e.target.value);
  const clipSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        clip: parseInt(clip),
      },
    });
    setClip('0');
  };

  const fundsChange = (e: ChangeEvent<HTMLInputElement>) => setFunds(e.target.value);
  const fundsSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        funds: parseInt(funds),
      },
    });
    setFunds('0');
  };

  const wireChange = (e: ChangeEvent<HTMLInputElement>) => setWire(e.target.value);
  const wireSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        wire: parseInt(wire),
      },
    });
    setWire('0');
  };

  const clipperChange = (e: ChangeEvent<HTMLInputElement>) => setClipper(e.target.value);
  const clipperSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        clipper: parseInt(clipper),
      },
    });
    setClipper('0');
  };

  const trustChange = (e: ChangeEvent<HTMLInputElement>) => setTrust(e.target.value);
  const trustSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        trust: parseInt(trust),
      },
    });
    setTrust('0');
  };

  const memoryChange = (e: ChangeEvent<HTMLInputElement>) => setMemory(e.target.value);
  const memorySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        memory: Math.min(Number(memory), 100),
        operationMax: Number(memory) * 700,
      },
    });
    setMemory('0');
  };

  const processorChange = (e: ChangeEvent<HTMLInputElement>) => setProcessor(e.target.value);
  const processorSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        processor: Math.min(Number(processor), 100),
      },
    });
    setProcessor('0');
  };

  const operationChange = (e: ChangeEvent<HTMLInputElement>) => setOperation(e.target.value);
  const operationSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        operation: Math.min(Number(operation), factory.operationMax),
      },
    });
    setOperation('0');
  };

  const creativityChange = (e: ChangeEvent<HTMLInputElement>) => setCreativity(e.target.value);
  const creativitySubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        creativity: Math.min(Number(creativity), 100),
      },
    });
    setCreativity('0');
  };

  const cashChange = (e: ChangeEvent<HTMLInputElement>) => setCash(e.target.value);
  const cashSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFactory({
      type: 'INITIALIZE',
      state: {
        ...factory,
        cash: Number(cash),
        funds: factory.funds - Number(cash),
      },
    });
    setCash('0');
  };

  const updateWire = (bonus: number) => setFactory({ type: 'UPDATE_WIRE_BONUS', bonus });
  const updateClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_CLIPPER_BONUS', bonus });
  const updateMegaClipperBonus = (bonus: number) => setFactory({ type: 'UPDATE_MEGA_CLIPPER_BONUS', bonus });
  const updateMarketingBonus = (bonus: number) => setFactory({ type: 'UPDATE_MARKETING_BONUS', bonus });
  const updateUnsoldInventory = (bonus: number) => setFactory({ type: 'UPDATE_UNSOLD_INVENTORY_BONUS', bonus });

  return display ? (
    <div
      className={styles.debug}
      role="complementary"
    >
      <form onSubmit={alertsSubmit}>
        <label>alerts</label>
        <input
          value={alertsText}
          onChange={alertsChange}
        />
        <button type="submit">Add</button>
      </form>
      {/*<form onSubmit={noticesSubmit}>*/}
      {/*  <label>notices</label>*/}
      {/*  <input*/}
      {/*    value={noticesId}*/}
      {/*    onChange={noticesChange}*/}
      {/*  />*/}
      {/*  <button type="submit">Add</button>*/}
      {/*</form>*/}
      <form onSubmit={featureSubmit}>
        <label>feature</label>
        <input
          value={feature}
          onChange={featureChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={clipSubmit}>
        <label>clips</label>
        <input
          value={clip}
          onChange={clipChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={fundsSubmit}>
        <label>funds</label>
        <input
          value={funds}
          onChange={fundsChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={wireSubmit}>
        <label>wire</label>
        <input
          value={wire}
          onChange={wireChange}
        />
        <button type="submit">Add</button>
      </form>
      {/*<form>*/}
      {/*  <label>marketing</label>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    onClick={marketingClick}*/}
      {/*  >*/}
      {/*    +1*/}
      {/*  </button>*/}
      {/*</form>*/}
      <form onSubmit={clipperSubmit}>
        <label>clipper</label>
        <input
          value={clipper}
          onChange={clipperChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={trustSubmit}>
        <label>trust</label>
        <input
          value={trust}
          onChange={trustChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={memorySubmit}>
        <label>memory</label>
        <input
          value={memory}
          onChange={memoryChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={processorSubmit}>
        <label>processor</label>
        <input
          value={processor}
          onChange={processorChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={operationSubmit}>
        <label>operation</label>
        <input
          value={operation}
          onChange={operationChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={creativitySubmit}>
        <label>creativity</label>
        <input
          value={creativity}
          onChange={creativityChange}
        />
        <button type="submit">Add</button>
      </form>
      <form onSubmit={cashSubmit}>
        <label>cash</label>
        <input
          value={cash}
          onChange={cashChange}
        />
        <button type="submit">Add</button>
      </form>
      <form>
        <label>wirebonus</label>
        <button
          type="button"
          onClick={() => updateWire(1e2)}
        >
          1e2
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e3)}
        >
          1e3
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e4)}
        >
          1e4
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e5)}
        >
          1e5
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e6)}
        >
          1e6
        </button>
        <button
          type="button"
          onClick={() => updateWire(1e7)}
        >
          1e7
        </button>
      </form>
      <form>
        <label>clipperBonus</label>
        <button
          type="button"
          onClick={() => updateClipperBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateClipperBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <label>megaClipperBonus</label>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateMegaClipperBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <label>marketingBonus</label>
        <button
          type="button"
          onClick={() => updateMarketingBonus(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateMarketingBonus(100)}
        >
          100
        </button>
      </form>
      <form>
        <label>unsoldInventoryBonus</label>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(0)}
        >
          0
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(2)}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(5)}
        >
          5
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(10)}
        >
          10
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(50)}
        >
          50
        </button>
        <button
          type="button"
          onClick={() => updateUnsoldInventory(100)}
        >
          100
        </button>
      </form>
    </div>
  ) : null;
};
