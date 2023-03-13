/*
Destro5y rigid body objects that collide with this object.
Author: Santiago Tena
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyer : MonoBehaviour
{

    void OnTriggerEnter2D(Collider2D col)
    {
        Destroy(col.gameObject);
    }
}