/*
Destroy rigid body objects that collide with this object.
Author: Santiago Tena & Domingo Mora
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/* En esta función lo que se le indica es lo siguiente: Al tocar el colider en el objeto 2D, se destruye. El trigger se pone dentro de unity como un checkmark del sprite
:: Destruir objetos que colisionan con este objeto:: */


public class Destroyer : MonoBehaviour
{

    void OnTriggerEnter2D(Collider2D col)
    {
        Destroy(col.gameObject);
    }
}